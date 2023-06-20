import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCount } from "../hooks/useCount";
import { useSearch } from "../hooks/useSearch";
import { useContractSend } from "../hooks/contract/useContractWrite";
import MarketplaceInstance from '../abi/Marketplace.json';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

describe("<Hooks />", () => {
  it("should render use count hook when it's added", () => {
    const { result } = renderHook(() => useCount());
    result.current.count = 1;
    act(() => {
      result.current.addCount();
    });
    expect(result.current.count).toBe(1);
  });

  it("should render use count hook when it's subtracted", () => {
    const { result } = renderHook(() => useCount());
    act(() => {
      result.current.subCount();
    });
    expect(result.current.count).toBe(-1);
  });

  it("should render use search hook when handle get search is called", () => {
    const { result } = renderHook(() => useSearch());
    act(() => {
      result.current.handleGetUserSearch('search');
    });
    expect(result.current.userSearch).toBe('search');
  });

  it("should render use search hook when ", () => {
    const { result } = renderHook(() => useSearch());
    act(() => {
      result.current.handleUserFilter('search');
    });
    expect(result.current.userSearch).toBe('search');
  });
});
