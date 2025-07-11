# React Performance Optimization Assessment

## Overview

This is a performance optimization assessment for React developers. You are tasked with optimizing a React dashboard application to achieve specific Lighthouse performance scores.

## Assessment Instructions

### 1. Project Setup

1. **Download and Extract**

   - Download the project from the provided Google Drive link
   - Extract the ZIP file to your local development environment

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Start Development Server**
   ```bash
   yarn start
   ```
   The application will run on http://localhost:8000

### 2. Initial Performance Audit

Before making any changes, you need to establish a baseline performance score:

1. **Run Lighthouse Audit on Development Server** (for initial assessment)

   ```bash
   yarn lighthouse
   ```

   This will generate a `lighthouse-report.json` file with your initial scores.

2. **Review Results**
   - Check the performance score in the generated report
   - Identify areas that need improvement
   - Document your initial score for reference

### 3. Optimization Requirements

Your goal is to optimize the application to achieve:

- **Lighthouse Performance Score: 85-100** (measured on production build)
- Maintain all existing functionality
- Ensure the application remains responsive and user-friendly

### 4. Development Guidelines

#### Your Task:

Analyze the current application and identify performance bottlenecks. Use your knowledge of modern web development best practices to optimize the application across all relevant areas including but not limited to:

- Loading performance
- Runtime performance
- Resource optimization
- Network efficiency
- Rendering optimization

#### Commit Guidelines:

- Make frequent commits with meaningful messages
- Document your optimization approach
- Example commit format: `perf: [brief description of optimization]`

### 5. Available Scripts

- `yarn start` - Start development server on port 8000
- `yarn build` - Build optimized production bundle
- `yarn test` - Run test suite
- `yarn lighthouse` - Run Lighthouse performance audit on http://localhost:8000
- `yarn audit` - Alias for lighthouse command

### 6. Project Structure

```
src/
├── components/          # React components
│   ├── charts/         # Chart components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── DataTable.tsx   # Data table component
│   └── ui/             # UI components
├── store/              # State management
│   ├── redux/          # Redux store
│   └── zustand/        # Zustand store
├── data/               # Mock data and configurations
├── hooks/              # Custom React hooks
├── services/           # API services
├── utils/              # Utility functions
└── styles/             # Styling files
```

### 7. Testing Your Optimizations

#### During Development:

You can run quick performance checks on the development server for immediate feedback:

```bash
yarn lighthouse
```

#### For Final Assessment (REQUIRED):

**⚠️ IMPORTANT: Your final submission must be evaluated on the production build**

1. **Stop Development Server**

   - Stop the current `yarn start` process (Ctrl+C)

2. **Build for Production**

   ```bash
   yarn build
   ```

3. **Serve Production Build on Port 8000**

   ```bash
   npx serve -s build -l 8000
   ```

   This serves the optimized production build on the same port (8000) that the lighthouse script expects

4. **Run Final Lighthouse Audit** (in a new terminal)

   ```bash
   yarn lighthouse
   ```

   The lighthouse script will now audit your production build at http://localhost:8000

5. **Verify Functionality**
   - Ensure all dashboard features work correctly
   - Test responsive design
   - Verify data loading and interactions

### 8. Submission Requirements

1. **Final Performance Check**

   - ⚠️ **CRITICAL**: Run final Lighthouse audit on production build only
   - Ensure performance score is between 85-100
   - Screenshot your final Lighthouse results

2. **Code Quality**

   - Ensure code is clean and well-documented
   - Remove any console.logs or debugging code
   - Verify all tests pass

3. **Prepare Submission**

   - Create a ZIP file of your complete project
   - Include the final lighthouse-report.json (from production build)
   - Add a brief summary of optimizations made (in comments or separate file)

4. **Submit Your Work**
   - Reply to the assessment email with your ZIP file attached
   - Include any notes about your optimization approach
   - Mention your final Lighthouse performance score (from production build)

### 9. Evaluation Criteria

You will be evaluated on:

- **Performance Score** (Primary): Achieving 85-100 Lighthouse performance score on production build
- **Code Quality**: Clean, maintainable, and well-structured code
- **Optimization Approach**: Effectiveness of chosen optimization strategies
- **Functionality**: Maintaining all original features and usability
- **Problem-Solving**: Ability to identify and resolve performance issues

#### Bonus Points:

- **Testing**: Writing meaningful tests or improving existing test coverage for optimized components
- **Documentation**: Clear documentation of optimization strategies and their impact

### 10. Resources

- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Web.dev Performance](https://web.dev/performance/)
- [React Documentation](https://react.dev/)

---

**Good luck with your optimization work! Use your expertise to identify and resolve performance bottlenecks while maintaining code quality and functionality.**
