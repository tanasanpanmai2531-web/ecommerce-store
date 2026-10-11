"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          ElecLabs Store
        </Link>

        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link text-white" href="/">
            สินค้า
          </Link>

          <Link className="nav-link text-white" href="/cart">
            <i className="bi bi-cart3 me-1" />
            ตะกร้า
          </Link>
        </div>
      </div>
    </nav>
  );
}
