import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import RelativeTime from "@/components/RelativeTime";

// Fixed "now" for deterministic tests
const NOW = new Date("2024-01-15T12:00:00.000Z").getTime();

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("RelativeTime", () => {
  describe("dateTime attribute", () => {
    it("renders a <time> element with the original date as dateTime", () => {
      const date = "2024-01-15T11:59:30.000Z";
      render(<RelativeTime date={date} />);
      const el = screen.getByRole("time");
      expect(el).toHaveAttribute("dateTime", date);
    });
  });

  describe("past dates", () => {
    it("shows seconds for a date 30 seconds ago", () => {
      const date = new Date(NOW - 30_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/seconds? ago/i);
    });

    it("shows minutes for a date 5 minutes ago", () => {
      const date = new Date(NOW - 5 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/minutes? ago/i);
    });

    it("shows hours for a date 3 hours ago", () => {
      const date = new Date(NOW - 3 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/hours? ago/i);
    });

    it("shows days for a date 10 days ago", () => {
      const date = new Date(NOW - 10 * 24 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/days? ago/i);
    });

    it("shows months for a date 2 months ago", () => {
      const date = new Date(NOW - 2 * 30 * 24 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/months? ago/i);
    });

    it("shows years for a date 2 years ago", () => {
      const date = new Date(NOW - 2 * 12 * 30 * 24 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/years? ago/i);
    });

    it("handles 'yesterday' near the day boundary", () => {
      const date = new Date(NOW - 24 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(
        /yesterday|1 day ago/i,
      );
    });
  });

  describe("future dates", () => {
    it("shows seconds for a date 30 seconds in the future", () => {
      const date = new Date(NOW + 30_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/in \d+ seconds?/i);
    });

    it("shows years for a date 2 years in the future", () => {
      const date = new Date(NOW + 2 * 12 * 30 * 24 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/in \d+ years?/i);
    });

    it("shows months for a date 3 months in the future", () => {
      const date = new Date(NOW + 3 * 30 * 24 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/in \d+ months?/i);
    });
  });

  describe("invalid date input", () => {
    it("returns the raw string for an invalid date", () => {
      render(<RelativeTime date="not-a-date" />);
      expect(screen.getByRole("time")).toHaveTextContent("not-a-date");
    });

    it("still sets dateTime attribute for invalid input", () => {
      render(<RelativeTime date="garbage" />);
      expect(screen.getByRole("time")).toHaveAttribute("dateTime", "garbage");
    });
  });

  describe("date-only strings (YYYY-MM-DD)", () => {
    it("treats today's date-only string as today, not yesterday", () => {
      // NOW is 2024-01-15T12:00:00.000Z. In jsdom (UTC), local date is 2024-01-15.
      // A date-only string for the same day should show hours ago, not yesterday.
      render(<RelativeTime date="2024-01-15" />);
      expect(screen.getByRole("time")).toHaveTextContent(/hours? ago|today/i);
    });

    it("treats yesterday's date-only string as yesterday", () => {
      render(<RelativeTime date="2024-01-14" />);
      expect(screen.getByRole("time")).toHaveTextContent(
        /yesterday|1 day ago/i,
      );
    });

    it("still handles full ISO strings with Z suffix as UTC", () => {
      const date = new Date(NOW - 3 * 60 * 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/hours? ago/i);
    });
  });

  describe("boundary conditions", () => {
    it("treats exactly 60,000ms as minutes, not seconds", () => {
      const date = new Date(NOW - 60_000).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/minute/i);
    });

    it("treats 59,999ms as seconds", () => {
      const date = new Date(NOW - 59_999).toISOString();
      render(<RelativeTime date={date} />);
      expect(screen.getByRole("time")).toHaveTextContent(/seconds?/i);
    });
  });
});
