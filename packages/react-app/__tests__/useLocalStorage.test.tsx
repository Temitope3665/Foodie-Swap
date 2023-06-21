/**
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";
import useLocalStorage from "../hooks/useLocalStorage";

describe("should CRUD using Local Storage Hook", () => {
  it("get items from local storage when items is set", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.setLocalStorage({ key: "user_info", value: "carmedis" });
    });
    expect(result.current.getLocalStorage()).toBeTruthy();
  });
  it("get items from local storage when items is not set", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.setLocalStorage({ value: "carmedis" });
    });
    expect(result.current.getLocalStorage()).toBeTruthy();
  });
  it("set item to local storage", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.setLocalStorage({ key: "has_favourites", value: true });
    });
  });
  it("should clear all item in local storage", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.setLocalStorage({ key: "user_info", value: "carmedis" });
    });
    result.current.clearStorage();
  });
  it("should remove an item in local storage", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.setLocalStorage({ key: "user_info", value: "carmedis" });
    });
    result.current.removeItem("user_info");
  });
});
