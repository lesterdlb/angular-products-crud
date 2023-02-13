using ErrorOr;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AngularProductsCRUD.Api.Controllers.Common;

[ApiController]
[Route("api/[controller]")]
public abstract class ApiController : ControllerBase
{
    protected ISender Mediator { get; }

    protected ApiController(ISender mediator) => Mediator = mediator;

    protected ActionResult Problem(List<Error> errors)
    {
        if (errors.Count is 0) return Problem();

        return errors.All(error => error.Type is ErrorType.Validation)
            ? ValidationProblem(errors)
            : Problem(errors.First());
    }

    protected CreatedAtActionResult CreatedAtActionResult<T>(Guid id, T dto, string actionName)
    {
        return CreatedAtAction(
            actionName: actionName,
            routeValues: new { id },
            value: dto);
    }

    private ActionResult Problem(Error error)
    {
        var statusCode = error.Type switch
        {
            ErrorType.Conflict => StatusCodes.Status409Conflict,
            ErrorType.Validation => StatusCodes.Status400BadRequest,
            ErrorType.NotFound => StatusCodes.Status404NotFound,
            _ => StatusCodes.Status500InternalServerError
        };

        return Problem(statusCode: statusCode, title: error.Description);
    }

    private ActionResult ValidationProblem(List<Error> errors)
    {
        var modelState = new ModelStateDictionary();

        foreach (var error in errors)
        {
            modelState.AddModelError(error.Code, error.Description);
        }

        return ValidationProblem(modelState);
    }
}