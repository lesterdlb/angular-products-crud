FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY *.sln .
COPY ["src/AngularProductsCRUD.Api/AngularProductsCRUD.Api.csproj", "AngularProductsCRUD.Api/"]
COPY ["src/AngularProductsCRUD.Infrastructure/AngularProductsCRUD.Infrastructure.csproj", "AngularProductsCRUD.Infrastructure/"]
COPY ["src/AngularProductsCRUD.Application/AngularProductsCRUD.Application.csproj", "AngularProductsCRUD.Application/"]
COPY ["src/AngularProductsCRUD.Domain/AngularProductsCRUD.Domain.csproj", "AngularProductsCRUD.Domain/"]
RUN dotnet restore "AngularProductsCRUD.Api/AngularProductsCRUD.Api.csproj"
COPY . .
WORKDIR "/src/src/AngularProductsCRUD.Api"
RUN dotnet build "AngularProductsCRUD.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AngularProductsCRUD.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
RUN apt-get update 
RUN apt-get --yes install curl
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AngularProductsCRUD.Api.dll"]
