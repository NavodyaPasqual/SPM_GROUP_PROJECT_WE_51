import AddCompanyPayment from "../addTransactions";
import {getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom';

let container = null;

describe('Testing add transaction that contain a form ', () => {
    beforeEach (() => {
        container = render(<AddCompanyPayment/>).container;
    });
    it('should render Title', () =>{
        expect(getByTestId(container, 'title-field-add-transaction')).toBeTruthy();
        expect(getByTestId(container, 'title-field-add-transaction').textContent).toBe('New Company Payment Record');
    });
    it('Should render form tag', () => {
        expect(getByTestId(container, 'form-tag-add-transaction')).toBeTruthy();
    });
    it('should render Input Field payment name', () =>{
        expect(getByTestId(container, 'payment-name-field')).toBeTruthy();
    });
    it('should render Input Field payment amount', () =>{
        expect(getByTestId(container, 'payment-amount-field')).toBeTruthy();
    });
    it('should render Input Field payment date', () =>{
        expect(getByTestId(container, 'payment-date-field')).toBeTruthy();
    });
    it('should render Input Field payment type', () =>{
        expect(getByTestId(container, 'payment-type-field')).toBeTruthy();
    });
    it('should render payment submit button', () =>{
        expect(getByTestId(container, 'submit-button')).toBeTruthy();
    });
});