import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "@/components/skeleton";

describe("Skeleton", () => {
  it("renders with default classes", () => {
    const { container } = render(<Skeleton />);
    const div = container.firstElementChild as HTMLElement;

    expect(div).toHaveClass("animate-pulse");
    expect(div).toHaveClass("rounded-md");
  });

  it("merges custom className via tailwind-merge", () => {
    const { container } = render(<Skeleton className="h-4 w-4" />);
    const div = container.firstElementChild as HTMLElement;

    expect(div).toHaveClass("h-4");
    expect(div).toHaveClass("w-4");
    // default classes should still be present via twMerge
    expect(div).toHaveClass("animate-pulse");
  });

  it("passes through extra HTML div props", () => {
    const { container } = render(<Skeleton data-testid="skeleton" aria-label="loading" />);
    const div = container.firstElementChild as HTMLElement;

    expect(div).toHaveAttribute("data-testid", "skeleton");
    expect(div).toHaveAttribute("aria-label", "loading");
  });
});
