using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace AngularProductsCRUD.Api.Controllers;

public class ErrorsController : Controller
{
    [HttpGet]
    [Route("/error")]
    public IActionResult Error()
    {
        var exception = HttpContext.Features.Get<IExceptionHandlerFeature>()?.Error;

        return Problem(title: exception?.Message);
    }
}