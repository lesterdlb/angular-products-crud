using AngularProductsCRUD.Api.Controllers.Common;
using AngularProductsCRUD.Application.Common.Dto.Products;
using AngularProductsCRUD.Application.Products.Commands.CreateProduct;
using AngularProductsCRUD.Application.Products.Queries.GetProduct;
using AngularProductsCRUD.Application.Products.Queries.GetProducts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AngularProductsCRUD.Api.Controllers;

public class ProductsController : ApiController
{
    public ProductsController(ISender mediator) : base(mediator)
    {
    }

    [HttpGet]
    public async Task<ActionResult<List<ViewProductDto>>> GetAll()
    {
        var products = await Mediator.Send(new GetProductsQuery());

        return Ok(products);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ViewProductDto>> Get(Guid id)
    {
        var result = await Mediator.Send(new GetProductQuery(id));

        return result.Match(Ok, Problem);
    }

    [HttpPost]
    public async Task<IActionResult> Post(ProductDto request)
    {
        var command = new CreateProductCommand(request);
        var result = await Mediator.Send(command);

        return result.Match(
            id => CreatedAtActionResult(id, request, nameof(Get)),
            Problem);
    }
}