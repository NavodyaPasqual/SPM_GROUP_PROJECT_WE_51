import AddStudentPayment from "../addStudentPayment";
import {getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom';

let container = null;

describe('Testing add student payment that contain a form ', () => {
    beforeEach (() => {
        container = render(<AddStudentPayment/>).container;
    });
    it('should render the title', () =>{
        expect(getByTestId(container, 'title-field-add-student-payment')).toBeTruthy();
        expect(getByTestId(container, 'title-field-add-student-payment').textContent).toBe('Student Payment Submission');
    });
    it('Should render the form tag', () => {
        expect(getByTestId(container, 'form-tag-add-student-payment')).toBeTruthy();
    });
    it('should render Input Field student name', () =>{
        expect(getByTestId(container, 'student-name-field')).toBeTruthy();
    });
    it('should render Input Field student contact no', () =>{
        expect(getByTestId(container, 'student-contactNo-field')).toBeTruthy();
    });
    it('should render Input Field student id', () =>{
        expect(getByTestId(container, 'student-id-field')).toBeTruthy();
    });
    it('should render Input Field class name', () =>{
        expect(getByTestId(container, 'class-name-field')).toBeTruthy();
    });
    it('should render Input Field teacher name', () =>{
        expect(getByTestId(container, 'teacher-name-field')).toBeTruthy();
    });
    it('should render Input Field payment type', () =>{
        expect(getByTestId(container, 'payment-type-field')).toBeTruthy();
    });
    it('should render Input Field student payment amount', () =>{
        expect(getByTestId(container, 'payment-amount-field')).toBeTruthy();
    });
    it('should render Input Field student payment date', () =>{
        expect(getByTestId(container, 'payment-date-field')).toBeTruthy();
    });
    it('should render Input Field bank', () =>{
        expect(getByTestId(container, 'bank-field')).toBeTruthy();
    });
    it('should render Input Field branch', () =>{
        expect(getByTestId(container, 'branch-field')).toBeTruthy();
    });
    it('should render Input Field payment slip', () =>{
        expect(getByTestId(container, 'payment-slip-field')).toBeTruthy();
    });
    it('should render payment submit button', () =>{
        expect(getByTestId(container, 'submit-button')).toBeTruthy();
    });
});