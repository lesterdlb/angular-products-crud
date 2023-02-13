using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using AngularProductsCRUD.Application.Common.Interfaces.Persistence;

namespace AngularProductsCRUD.Infrastructure.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly ApplicationDbContext _dbContext;

    public GenericRepository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<T> Add(T entity)
    {
        await _dbContext.AddAsync(entity);
        await _dbContext.SaveChangesAsync();
        return entity;
    }

    public async Task<T?> Get(Guid id) => await _dbContext.Set<T>().FindAsync(id);

    public async Task<T?> Get(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[]? includes)
    {
        var query = _dbContext.Set<T>().AsQueryable();

        if (includes is null) return await query.FirstOrDefaultAsync(predicate);
        query = includes.Aggregate(query, (current, include) => current.Include(include));

        return await query.FirstOrDefaultAsync(predicate);
    }

    public async Task<IReadOnlyList<T>> GetAll(params Expression<Func<T, object>>[]? includes)
    {
        var query = _dbContext.Set<T>().AsQueryable();

        if (includes is null) return await query.ToListAsync();
        query = includes.Aggregate(query, (current, include) => current.Include(include));

        return await query.ToListAsync();
    }

    public async Task<bool> Exists(Guid id) => await Get(id) is not null;

    public async Task Update(T entity)
    {
        _dbContext.Entry(entity).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }

    public async Task Delete(T entity)
    {
        _dbContext.Set<T>().Remove(entity);
        await _dbContext.SaveChangesAsync();
    }
}