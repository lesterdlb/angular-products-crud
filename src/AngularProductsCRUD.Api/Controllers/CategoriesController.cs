using AngularProductsCRUD.Api.Controllers.Common;
using AngularProductsCRUD.Application.Categories.Commands.CreateCategory;
using AngularProductsCRUD.Application.Categories.Commands.DeleteCategory;
using AngularProductsCRUD.Application.Categories.Commands.UpdateCategory;
using AngularProductsCRUD.Application.Categories.Queries.GetCategories;
using AngularProductsCRUD.Application.Categories.Queries.GetCategory;
using AngularProductsCRUD.Application.Common.Dto.Categories;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AngularProductsCRUD.Api.Controllers;

public class CategoriesController : ApiController
{
    public CategoriesController(ISender mediator) : base(mediator)
    {
    }

    [HttpGet]
    public async Task<ActionResult<List<ViewCategoryDto>>> GetAll()
    {
        var categories = await Mediator.Send(new GetCategoriesQuery());

        return Ok(categories);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<ViewCategoryDto>> Get(Guid id)
    {
        var result = await Mediator.Send(new GetCategoryQuery(id));

        return result.Match(Ok, Problem);
    }

    [HttpPost]
    public async Task<IActionResult> Post(CategoryDto request)
    {
        var command = new CreateCategoryCommand(request);
        var result = await Mediator.Send(command);

        return result.Match(
            id => CreatedAtActionResult(id, request, nameof(Get)),
            Problem);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Put(Guid id, CategoryDto request)
    {
        var command = new UpdateCategoryCommand(id, request);
        var result = await Mediator.Send(command);

        return result.Match(
            _ => NoContent(),
            Problem
        );
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var command = new DeleteCategoryCommand(id);
        var result = await Mediator.Send(command);

        return result.Match(
            _ => NoContent(),
            Problem
        );
    }
}