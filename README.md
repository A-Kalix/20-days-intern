# Hastane 4.0 - Model Management System

This repository contains the full 20-day internship project for Hastane 4.0.

## Architecture
- **Backend:** ASP.NET Core Web API (Clean Architecture)
- **Frontend:** React + Vite + Tailwind CSS
- **Database:** PostgreSQL with Entity Framework Core

## Day-by-Day Internship Log
- **Day 1:** Analyzed system requirements, use cases, and defined the 4-tier user role hierarchy.
- **Day 2:** Initialized the ASP.NET Core Web API solution and React + Vite frontend environment.
- **Day 3:** Set up PostgreSQL connection with EF Core and created BaseEntity with soft-delete flags.
- **Day 4:** Modeled core domain entities: Indicators, Dimensions, Languages, and Countries.
- **Day 5:** Implemented AppDbContext, Generic Repositories, and Global Query Filters for soft deletes.
- **Day 6:** Standardized Data Transfer Objects (DTOs) with DataAnnotations (Required, MaxLength).
- **Day 7:** Configured Swagger and implemented full CRUD endpoints for the IndicatorController.
- **Day 8:** Built the React UI layout, including the Tailwind Sidebar and Global Search Header.
- **Day 9:** Configured React Router and scaffolded main module pages (Indicators, Languages).
- **Day 10:** Developed a reusable DataTable component and implemented list views with status filters.
- **Day 11:** Expanded the domain model to support multi-language bindings and created Translation DTOs.
- **Day 12:** Initialized i18next on the frontend and built LanguageTabs for multi-language form entries.
- **Day 13:** Built complex form components with real-time validation for Indicator creation.
- **Day 14:** Added Answer Types (Likert, Binary) and linked them to the Indicator domain model.
- **Day 15:** Handled dynamic rendering of Likert/Binary response configuration in the React UI.
- **Day 16:** Enforced 4-tier Role-based Access Control via `[Authorize]` attributes in the Web API.
- **Day 17:** Built Role Management views and dynamically restricted UI navigation based on the user's role.
- **Day 18:** Developed recursive Web API endpoints and a dynamic DetailTree component to visualize hierarchical models.
- **Day 19:** Standardized error handling globally via API Middleware and frontend Axios interceptors.
- **Day 20:** Finalized UI theming (Dark/Light), compiled the final internship report, and prepared code for handoff.

Project is fully documented and ready for handoff.