import React from 'react'

function Navbar() {
    return (
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between text-bg-light py-4 mb-4 px-5">
            <div class="col-md-3 mb-2 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className='me-3'><a href="#" class="nav-link px-2 text-orange fw-bold">Home</a></li>
                <li className='me-3'><a href="#" class="nav-link text-black px-2">About</a></li>
                <li className='me-3'><a href="#" class="nav-link text-black px-2">Services</a></li>
                <li className='me-3'><a href="#" class="nav-link text-black px-2">Portfolio Project</a></li>
                <li className='me-3'><a href="#" class="nav-link text-black px-2">All project</a></li>
            </ul>

            <div class="col-md-3 text-end">
                <button type="button" class="btn border-black rounded-pill me-3 px-4">Contact</button>
                <button type="button" class="btn bg-orange text-white rounded-pill px-4">Enquire</button>
            </div>
        </div>)
}
export default Navbar