using AngularProductsCRUD.Application.Common.Dto.Categories;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Queries.GetCategories;

public record GetCategoriesQuery : IRequest<List<ViewCategoryDto>>;