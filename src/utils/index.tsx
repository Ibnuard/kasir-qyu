import {Dimensions, PixelRatio} from 'react-native';

// get windows width heigth
const {width, height} = Dimensions.get('window');

// Scale size value based on windows size
export const Scaler = (value: number): number => {
  const scale = width / 375; // 375 adalah lebar layar standar iPhone 6 (sebagai contoh)
  return value * scale;
};

/**
 * Fungsi untuk menyesuaikan ukuran font dengan skala perangkat.
 * @param {number} size - Ukuran font dasar yang ingin diterapkan.
 * @returns {number} - Ukuran font yang sudah disesuaikan.
 */
export const scaleFont = (size: number) => {
  // Mendapatkan densitas pixel perangkat (1x, 2x, 3x, dst)
  const scale = PixelRatio.get();
  return size * scale;
};
