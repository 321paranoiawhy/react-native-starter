import {create} from 'zustand';

type HardwareState = {
  /**
   * 电子秤
   */
  electronicScale: boolean;
  /**
   * 标签打印
   */
  labelPrint: boolean;
  /**
   * 小票打印
   */
  receiptPrint: boolean;
  setElectronicScale: (bool: boolean | unknown) => void;
  setLabelPrint: (bool: boolean | unknown) => void;
  setReceiptPrint: (bool: boolean | unknown) => void;
};

export const useHardwareStore = create<HardwareState>()((set, get) => ({
  electronicScale: false,
  labelPrint: false,
  receiptPrint: false,
  setElectronicScale: v => set(state => (typeof v === 'boolean' ? {electronicScale: v} : {})),
  setLabelPrint: v => set(state => (typeof v === 'boolean' ? {labelPrint: v} : {})),
  setReceiptPrint: v => set(state => (typeof v === 'boolean' ? {receiptPrint: v} : {}))
}));
