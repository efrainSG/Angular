using CRUD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase {

        private readonly List<Product> ProductList;
        public ProductsController() {
            ProductList = new List<Product>();
            ProductList.Add(new Product {
                Id = 10, Name = "product alfa 10",
                Available = true, Description = "Product Description Alfa 10"
            });
            ProductList.Add(new Product {
                Id = 20, Name = "product beta 20",
                Available = true, Description = "Product Description Beta 20"
            });
            ProductList.Add(new Product {
                Id = 30, Name = "product gamma 30",
                Available = true, Description = "Product Description Gamma 30"
            });
            ProductList.Add(new Product {
                Id = 40, Name = "product delta 40",
                Available = true, Description = "Product Description Delta 40"
            });
            ProductList.Add(new Product {
                Id = 50, Name = "product epsilon 50",
                Available = true, Description = "Product Description Epsilon 50"
            });
            ProductList.Add(new Product {
                Id = 60, Name = "product phi 60",
                Available = true, Description = "Product Description Phi 60"
            });
        }

        [HttpPost]
        public ActionResult<List<Product>> postProduct(Product model) {
            Product p = new Product {
                Id = model.Id,
                Name = model.Name,
                Available = model.Available,
                Description = model.Description
            };
            ProductList.Add(p);
            return ProductList;
        }

        [HttpGet]
        public ActionResult<List<Product>> getProducts() {
            return ProductList;
        }

        [HttpGet(), Route("{id}")]
        public ActionResult<Product> getProduct([FromRoute] int id) {
            return ProductList.FirstOrDefault(p => p.Id == id);
        }

        [HttpDelete(), Route("{id}")]
        public ActionResult<List<Product>> deleteProduct([FromRoute] int id) {
            var p = ProductList.FirstOrDefault(p => p.Id == id);
            if (p != null)
                ProductList.Remove(p);
            return ProductList;
        }

        [HttpDelete]
        public ActionResult<List<Product>> deleteProducts() {
            ProductList.Clear();
            return ProductList;
        }

        [HttpGet(), Route("ProductsByName")]
        public ActionResult<List<Product>> getProductsByName([FromQuery] string name) {
            return ProductList.Where(p => p.Name.Contains(name)).ToList();
        }
    }
}
