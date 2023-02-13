namespace AngularProductsCRUD.Domain.Common.Models;

public abstract class Entity<TKey> where TKey : notnull
{
    public TKey Id { get; protected init; } = default!;
}