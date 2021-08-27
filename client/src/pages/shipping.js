import React , {useState, useEffect }from 'react';
import { createShipping } from '../functions/shipping';

const initialState = {
    shipper_name : "",
    shipper_address : "",
    shipper_contact : "",
    shipper_pincode : "",
}