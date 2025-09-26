# Salesforce Jest Testing Project

A comprehensive Salesforce DX project demonstrating Lightning Web Component (LWC) testing using Jest framework. This project showcases various testing patterns, mock strategies, and best practices for testing LWC components with Apex integration.

## Project Overview

This project contains a sample Lightning Web Component (`jestTesting`) that demonstrates:

- Interactive UI elements with event handling
- Apex method integration using `@wire` decorators
- Account data display with error handling
- Comprehensive Jest test coverage

## Key Components

### Lightning Web Component: `jestTesting`

- **Location**: `force-app/main/default/lwc/jestTesting/`
- **Purpose**: A demonstration component that fetches and displays account data
- **Features**:
  - Interactive button to show/hide content
  - Wired Apex method to fetch account records
  - Error handling for failed data retrieval
  - Responsive UI with Lightning Design System

### Apex Controller: `AccountListController`

- **Location**: `force-app/main/default/classes/AccountListController.cls`
- **Purpose**: Provides cacheable account data to LWC components
- **Features**:
  - Field-Level Security (FLS) enforcement
  - Configurable record limit
  - SOQL query optimization

## Jest Testing Framework

### Test Configuration

- **Jest Config**: `jest.config.js` - Extends Salesforce's LWC Jest configuration
- **Setup File**: `jest-sa11y-setup.js` - Accessibility testing setup
- **Package Scripts**: Multiple test commands for different scenarios

### Test Files Structure

The project includes comprehensive test examples in `force-app/main/default/lwc/jestTesting/__tests__/`:

#### 1. `jestTesting.test.js` - Component Integration Tests

- **DOM Rendering Tests**: Verifies Lightning Card and UI elements render correctly
- **Event Handling Tests**: Tests button clicks and content visibility
- **Wire Service Tests**: Mocks Apex calls and tests data/error scenarios
- **Mock Data**: Uses JSON files for consistent test data

#### 2. `basics.test.js` - Jest Fundamentals

- **Equality Matchers**: `toBe()`, `toEqual()`, `not.toBe()`
- **Truthiness Tests**: `toBeTruthy()`, `toBeFalsy()`, `toBeNull()`
- **Numeric Comparisons**: `toBeGreaterThan()`, `toBeLessThan()`
- **String Matching**: Regular expression matching with `toMatch()`
- **Array Testing**: `toContain()` for array element verification
- **Exception Testing**: `toThrow()` for error handling

#### 3. `setupAndTearDownScopes.test.js` - Test Lifecycle

- **Global Hooks**: `beforeAll()`, `afterAll()` for file-level setup
- **Suite Hooks**: Per-describe block setup and teardown
- **Test Hooks**: `beforeEach()`, `afterEach()` for individual tests
- **Execution Order**: Demonstrates proper test isolation

### Mock Data Files

- `data/getAccountList.json`: Sample account records for successful data scenarios
- `data/getAccountListNoRecords.json`: Empty array for no-data scenarios

## Testing Capabilities Demonstrated

### 1. Component Testing

- DOM element verification
- Event handling validation
- Conditional rendering logic
- CSS class and attribute testing

### 2. Wire Service Testing

- Apex method mocking with `createApexTestWireAdapter`
- Data emission simulation
- Error scenario testing
- Promise resolution handling

### 3. Accessibility Testing

- Integration with `@sa11y/jest` for accessibility validation
- Automated a11y checks in component tests

### 4. Test Organization

- Proper test grouping with `describe()` blocks
- Lifecycle management with setup/teardown hooks
- Mock isolation and cleanup

## Available Test Commands

```bash
# Run all tests
npm run test

# Run tests in watch mode (auto-rerun on changes)
npm run test:unit:watch

# Run tests with debugging
npm run test:unit:debug

# Generate code coverage report
npm run test:unit:coverage
```

## Development Workflow

### Local Development

The project includes development utilities in `force-dev/`:

- Local development app configuration
- Development wrapper components
- Utility bar setup for testing

### Scripts

Located in `scripts/` directory:

- `create-scratch-org.sh`: Automated scratch org creation
- `install-local-dev.sh`: Local development environment setup
- `run-local-dev-app.sh`: Local app execution

## Getting Started

1. **Clone and Setup**:

   ```bash
   git clone <repository-url>
   npm install
   ```

2. **Run Tests**:

   ```bash
   npm run test
   ```

3. **Deploy to Org**:
   ```bash
   sf project deploy start -w 120 -g -c
   ```

## Best Practices Demonstrated

- **Test Isolation**: Proper component cleanup between tests
- **Mock Strategy**: Effective mocking of Apex methods and external dependencies
- **Data-Driven Testing**: Using JSON fixtures for consistent test data
- **Error Handling**: Testing both success and failure scenarios
- **Accessibility**: Automated accessibility testing integration

## Resources

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [LWC Jest Testing Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.testing)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
