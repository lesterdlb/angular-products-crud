using System.Linq.Expressions;

namespace AngularProductsCRUD.Application.Common.Interfaces.Persistence;

public interface IGenericRepository<T> where T : class
{
    Task<T> Add(T entity);
    Task<T?> Get(Guid id);
    Task<T?> Get(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[]? includes);
    Task<IReadOnlyList<T>> GetAll(params Expression<Func<T, object>>[]? includes);
    Task<bool> Exists(Guid id);
    Task Update(T entity);
    Task Delete(T entity);
}