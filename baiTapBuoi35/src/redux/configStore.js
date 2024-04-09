import { configureStore } from '@reduxjs/toolkit';
import thongTinDatVeReducer from './reducer/thongTinDatVeReducer'
 // Assuming ThongTinDatVeReducer is saved in a separate file

const store = configureStore({
  reducer: {
    ThongTinDatVe: thongTinDatVeReducer
  }
});

export default store;
