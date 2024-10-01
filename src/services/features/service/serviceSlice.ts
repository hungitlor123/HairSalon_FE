import { IService } from "@/interfaces/Service";
import { GET_SERVICE_ENDPOINT } from "@/services/constant/apiConfig";
import axiosInstance from "@/services/constant/axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


type ServiceState = {
    loading: boolean;
    services: IService[];
    service: IService | null;
    error: string[] | unknown;
};

const initialState: ServiceState = {
    loading: false,
    services: [],
    service: null,
    error: null,
};


export const getAllSertvice = createAsyncThunk<IService[], void>(
    "services/getAllService",
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get(GET_SERVICE_ENDPOINT);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
        }
    }
);

export const getServiceById = createAsyncThunk<IService, { id: number }>(
    "services/getServiceById",
    async (data, thunkAPI) => {
        const { id } = data;
        try {
            const response = await axiosInstance.get(`${GET_SERVICE_ENDPOINT}/${id}`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
        }
    }
);

export const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string[] | unknown>) => {
            state.error = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllSertvice.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllSertvice.fulfilled, (state, action) => {
                state.loading = false;
                state.services = action.payload;
            })
            .addCase(getAllSertvice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //getServiceById
            .addCase(getServiceById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getServiceById.fulfilled, (state, action) => {
                state.loading = false;
                state.service = action.payload;
            })
            .addCase(getServiceById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
