import React from 'react'
import {Link, VerticallyHorizontallyCentered, ContentText} from "../components/Main";
import {Col, Row} from "react-bootstrap";

export default function Dashboard() {
    return (
        <VerticallyHorizontallyCentered>
            <Col>
                <ContentText fontSize={'32px'}>Welcome!</ContentText>
                <ContentText>If you want to add ToDos please <Link href={'/login'}>Login</Link> </ContentText>
            </Col>
        </VerticallyHorizontallyCentered>
    )
}
