import { IBooking, IBookingRequest } from "@/interfaces/Booking";
import { CUSTOMER_BOOKING_ENDPOINT, GET_BOOKING_ENDPOINT } from "@/services/constant/apiConfig";
import axiosInstance from "@/services/constant/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


type BookingState = {
    loading: boolean;
    bookings: IBooking[] | null;
    booking: IBooking | null;
    error: string[] | unknown;
}

const initialState: BookingState = {
    loading: false,
    bookings: null,
    booking: null,
    error: null,
}


export const getAllBooking = createAsyncThunk<IBooking[], void>(
    "bookings/getAllBooking",
    async (_, thunkAPI) => {
        try {
            const token = sessionStorage.getItem('hairSalonToken');
            const response = await axiosInstance.get(GET_BOOKING_ENDPOINT, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
        }
    }
);


export const customerCreateBooking = createAsyncThunk<IBooking, IBookingRequest, { rejectValue: { errCode: number, errMsg: string } }>(
    "bookings/customerCreateBooking",
    async (data, thunkAPI) => {
        try {
            const token = sessionStorage.getItem('hairSalonToken');
            const params = new URLSearchParams();

            // Append regular fields
            Object.entries(data).forEach(([key, value]) => {
                if (key !== "serviceIds") {
                    params.append(key, String(value));
                }
            });

            // Manually append array fields for serviceIds[]
            data.serviceIds.forEach(serviceId => {
                params.append("serviceIds[]", String(serviceId));
            });

            const response = await axiosInstance.post(CUSTOMER_BOOKING_ENDPOINT, params, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            return response.data;
        } catch (error: any) {
            // Check if error response exists, otherwise return a default error
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue({
                    errCode: error.response.data.errCode || 1,
                    errMsg: error.response.data.errMsg || 'Unknown error occurred',
                });
            } else {
                return thunkAPI.rejectWithValue({
                    errCode: 1,
                    errMsg: 'Unknown error occurred',
                });
            }
        }
    }
);


export const bookingSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string[] | unknown>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooking.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllBooking.fulfilled, (state, action) => {
            state.loading = false;
            state.bookings = action.payload;
        });
        builder.addCase(getAllBooking.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(customerCreateBooking.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(customerCreateBooking.fulfilled, (state, action) => {
            state.loading = false;
            state.booking = action.payload;
        });
        builder.addCase(customerCreateBooking.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { setError } = bookingSlice.actions;
export default bookingSlice.reducer;