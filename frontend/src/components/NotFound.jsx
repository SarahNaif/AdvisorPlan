
import React from 'react'

import { React, useState, useEffect } from 'react'
import API_URL from '../../apiConfig'
import axios from 'axios';
import { Button, Container, Row, Col, Card, CardDeck, Badge, FormCheck, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import LoginAlert from "../../feedback/LoginAlert"

export default function NotFound() {
    return (
        <Section>
            <Container fluid>
                <Container style={{ border: "1px solid white", padding: 50, marginTop: "50px", marginBottom: "50px", borderRadius: "15px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                    <h1>page not found 404</h1>
                </Container>
            </Container>
        </Section>
    )
}
