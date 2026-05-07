import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the env module before importing api
vi.mock("@/env", () => ({
  env: {
    NEXT_PUBLIC_API_BASE_URL: "http://localhost:3000",
  },
}));

describe("api utility", () => {
  let api: (path: string, init?: RequestInit) => Promise<Response>;

  beforeEach(async () => {
    vi.resetModules();
    // Re-import after mocks are set up
    const mod = await import("@/data/api");
    api = mod.api;
  });

  it("constructs the correct URL with /api prefix", async () => {
    const mockFetch = vi.fn().mockResolvedValue(new Response());
    vi.stubGlobal("fetch", mockFetch);

    await api("/products");

    expect(mockFetch).toHaveBeenCalledOnce();
    const calledUrl = mockFetch.mock.calls[0][0] as URL;
    expect(calledUrl.href).toBe("http://localhost:3000/api/products");
  });

  it("passes through init options to fetch", async () => {
    const mockFetch = vi.fn().mockResolvedValue(new Response());
    vi.stubGlobal("fetch", mockFetch);

    const init: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test: true }),
    };

    await api("/products", init);

    expect(mockFetch).toHaveBeenCalledWith(expect.any(URL), init);
  });
});
