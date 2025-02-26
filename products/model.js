const ProductDB = require("./schema");

class Product {
  async List(req, res) {
    
    try {
      let { page = 0, limit = 10, title = "" } = req.body;
      page = Math.max(0, parseInt(page, 10));
      limit = Math.max(1, parseInt(limit, 10));
      const skip = page * limit;

      const query = title ? { title: { $regex: title, $options: "i" } } : {};

      const product = await ProductDB.find(query)
        .lean()
        .sort({ title: 1 })
        .collation({ locale: "en" })
        .skip(skip)
        .limit(limit);

      const next = product.length < limit ? null : page + 1;
      const prev = page > 0 ? page - 1 : null;

      return res.status(200).json({ product, prev, next });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new Product();
