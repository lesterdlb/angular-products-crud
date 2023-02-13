using ErrorOr;

namespace AngularProductsCRUD.Domain.Common.Errors;

public static partial class Errors
{
    public static class Entity
    {
        public static Error EntityNotFound =>
            Error.NotFound(
                code: "entity.not.found",
                description: "Entity not found");
    }
}