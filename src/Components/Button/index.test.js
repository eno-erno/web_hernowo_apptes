import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Button from "./index";

test('Should render <Link> component ', () => {
    const { container } = render(<Router><Button href="" type="link"></Button></Router>);

    expect(container.querySelector('a')).toBeInTheDocument();
});

test("Should render button component", () => {
    const { container } = render(<Button></Button>);

    expect(container.querySelector("button")).toBeInTheDocument();
})
