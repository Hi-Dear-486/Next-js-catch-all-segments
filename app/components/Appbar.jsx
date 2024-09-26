"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export function AppBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="data:image/png;base64,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"
          className="mr-3 h-12 sm:h-12"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} href="/products">
          Products
        </Navbar.Link>
        <Navbar.Link as={Link} href="/pricing">
          Pricing
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
