import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";
import { UserContext } from "../userContext";
import { SortProduct } from "../components/SortProduct";

// provider value for the use context
const providerValue = { 
  handleGetUserSearch: jest.fn(),
  userSearch: '',
  handleCurrentSort: jest.fn(),
  currentSort: 'newest',
  handleUserFilter: jest.fn(),
}

// Test renders components
describe("<Component />", () => {
  it("renders footer", () => {
    render(<Footer />);
  });

  // Test renders sort product
  it("renders sort product", () => {
    render(
      <UserContext.Provider value={providerValue}>
        <SortProduct />
      </UserContext.Provider>
    );
    const newest = screen.getByText('Newest');
    fireEvent.click(newest);
    expect(providerValue.handleCurrentSort).toHaveBeenCalledWith('newest');
    expect(providerValue.handleUserFilter).toHaveBeenCalledWith('');
  });

  it("renders sort product when current sort is different", () => {
    const newProviderValue = { ...providerValue, currentSort: 'latest' }
    render(
      <UserContext.Provider value={newProviderValue}>
        <SortProduct />
      </UserContext.Provider>
    );
    const newest = screen.getByText('Newest');
    const chicken = screen.getByText('Chicken');
    const bbq = screen.getByText('BBQ');
    const burger = screen.getByText('Burger');
    fireEvent.click(newest);
    expect(providerValue.handleCurrentSort).toHaveBeenCalledWith('newest');
    expect(providerValue.handleUserFilter).toHaveBeenCalledWith('');

    fireEvent.click(chicken);
    expect(providerValue.handleCurrentSort).toHaveBeenCalledWith('chicken');
    expect(providerValue.handleUserFilter).toHaveBeenCalledWith('chicken');

    fireEvent.click(bbq);
    expect(providerValue.handleCurrentSort).toHaveBeenCalledWith('bbq');
    expect(providerValue.handleUserFilter).toHaveBeenCalledWith('bbq');

    fireEvent.click(burger);
    expect(providerValue.handleCurrentSort).toHaveBeenCalledWith('burger');
    expect(providerValue.handleUserFilter).toHaveBeenCalledWith('burger');
  });

  it("renders sort product when current sort is different - 1", () => {
    const newProviderValue = { ...providerValue, currentSort: 'chicken' }
    render(
      <UserContext.Provider value={newProviderValue}>
        <SortProduct />
      </UserContext.Provider>
    );
  });

  it("renders sort product when current sort is different - 2", () => {
    const newProviderValue = { ...providerValue, currentSort: 'bbq' }
    render(
      <UserContext.Provider value={newProviderValue}>
        <SortProduct />
      </UserContext.Provider>
    );
  });

  it("renders sort product when current sort is different - 3", () => {
    const newProviderValue = { ...providerValue, currentSort: 'burger' }
    render(
      <UserContext.Provider value={newProviderValue}>
        <SortProduct />
      </UserContext.Provider>
    );
  });

  it("renders sort product when current sort is different - 4", () => {
    const newProviderValue = { ...providerValue, currentSort: 'oldest' }
    render(
      <UserContext.Provider value={newProviderValue}>
        <SortProduct />
      </UserContext.Provider>
    );
  });
});
