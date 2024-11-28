import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Icon, Text} from 'react-native-paper';
import {CustomCard, Gap} from '../../components';
import {THEME_COLORS} from '../../constants';
import {RootStackParamList} from '../../types';
import {Scaler} from '../../utils';
import {Assets} from '../../utils/LoadAssets';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type TButtonIcon = {
  text: string;
  icon: string;
  color: string;
};

const SAMPLE_MENU = [
  {
    icon: 'food',
    color: THEME_COLORS.primary,
    text: 'Katalog',
  },
  {
    icon: 'shopping',
    color: THEME_COLORS.primary,
    text: 'Pengaturan Menu',
  },
  {
    icon: 'wallet',
    color: THEME_COLORS.primary,
    text: 'Pembayaran',
  },
  {
    icon: 'storefront',
    color: THEME_COLORS.primary,
    text: 'Toko',
  },
  {
    icon: 'account-cash',
    color: THEME_COLORS.primary,
    text: 'Pelanggan',
  },
  {
    icon: 'printer',
    color: THEME_COLORS.primary,
    text: 'Printer',
  },
  {
    icon: 'chart-arc',
    color: THEME_COLORS.primary,
    text: 'Statistik',
  },
];

function RenderButtonIcon(props: TButtonIcon) {
  return (
    <TouchableOpacity style={styles.buttonIconContainer} activeOpacity={0.8}>
      <Avatar.Icon
        icon={props.icon}
        size={48}
        color={props.color}
        style={styles.shopIconBg}
      />
      <Gap h={8} />
      <Text variant={'labelMedium'} style={styles.textMenu}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const Home = ({route, navigation}: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={THEME_COLORS.primary}
      />
      {/* Header Container */}
      <View style={[styles.rowContainer, styles.headerContainer]}>
        <Avatar.Icon
          size={24}
          icon={'account-outline'}
          style={styles.shopIconBg}
        />
        <TouchableOpacity activeOpacity={0.8}>
          <Icon
            source={'exit-to-app'}
            size={24}
            color={THEME_COLORS.onPrimary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Card Container */}
        <CustomCard.BaseCard style={styles.cardBase}>
          <View style={styles.cardDecorTop}>
            <Image source={Assets.cardDecor} />
          </View>
          <View style={styles.cardDecorBottom}>
            <Image style={styles.cardDecor} source={Assets.cardDecor} />
          </View>
          <View style={styles.rowContainer}>
            <Avatar.Icon
              size={54}
              icon={'shopping-outline'}
              style={styles.shopIconBg}
              color={THEME_COLORS.primary}
            />
            <Gap w={14} />
            <View style={styles.cardContent}>
              <Text
                style={[styles.textName, styles.baseTextPrimary]}
                variant={'titleMedium'}>
                Toko Ajaib
              </Text>
              <Text style={styles.baseTextSecondary} variant={'bodyMedium'}>
                Alamat
              </Text>
              <Gap h={2} />
              <Text style={styles.baseTextSecondary} variant={'bodySmall'}>
                No. Telp
              </Text>
            </View>
          </View>
        </CustomCard.BaseCard>

        {/* Income Container */}
        <View style={[styles.rowContainer, styles.incomeContainer]}>
          <View style={styles.incomeContent}>
            <Text variant={'bodyMedium'} style={styles.baseTextSecondary}>
              Pendapatan Hari Ini
            </Text>
            <Gap h={4} />
            <View style={styles.rowContainer}>
              <Icon
                source={'arrow-down'}
                size={20}
                color={THEME_COLORS.green}
              />
              <Gap w={4} />
              <Text variant={'bodyMedium'} style={styles.textIncome}>
                Rp 15.000.000
              </Text>
            </View>
          </View>
          <View style={styles.incomeContent}>
            <Text variant={'bodyMedium'} style={styles.baseTextSecondary}>
              Pendapatan Bulan Ini
            </Text>
            <Gap h={4} />
            <View style={styles.rowContainer}>
              <Icon
                source={'arrow-down'}
                size={20}
                color={THEME_COLORS.green}
              />
              <Gap w={4} />
              <Text variant={'bodyMedium'} style={styles.textIncome}>
                Rp 15.000.000
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.incomeRefresh} activeOpacity={0.8}>
            <Icon source={'restart'} size={24} color={THEME_COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Main Menu */}
        <View style={styles.menuContainer}>
          {SAMPLE_MENU.map((item, index) => (
            <RenderButtonIcon {...item} key={index} />
          ))}
        </View>

        {/* Bottom Content */}
        <View style={styles.bottomContainer}>
          <Text
            variant={'labelMedium'}
            style={[styles.textVersion, styles.baseTextSecondary]}>
            Versi 0.0.1
          </Text>
        </View>
      </View>
    </View>
  );
};

/**
 * ===========================
 * ====== STYLING GAP ========
 * ===========================
 */

const styles = StyleSheet.create({
  // -- base style
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.onPrimary,
  },

  content: {
    flex: 1,
    padding: Scaler(14),
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flexBase: {
    flex: 1,
  },

  baseTextWhite: {
    color: THEME_COLORS.onSecondary,
  },

  baseTextPrimary: {
    color: THEME_COLORS.primary,
  },

  baseTextSecondary: {
    color: THEME_COLORS.secondary,
    opacity: 0.7,
  },

  // -- other style
  headerContainer: {
    backgroundColor: THEME_COLORS.primary,
    padding: Scaler(14),
    justifyContent: 'space-between',
  },

  cardBase: {
    backgroundColor: THEME_COLORS.surface,
    marginVertical: Scaler(8),
  },

  cardDecorTop: {position: 'absolute', right: -16, top: -16},

  cardDecorBottom: {
    position: 'absolute',
    left: -16,
    bottom: -16,
    transform: [{rotate: '180deg'}],
  },

  cardDecor: {
    width: Scaler(38),
    height: Scaler(38),
  },

  cardContent: {maxWidth: '80%'},

  shopIconBg: {
    backgroundColor: THEME_COLORS.surfaceVariant,
  },

  incomeContainer: {
    justifyContent: 'space-between',
    marginHorizontal: Scaler(14),
    marginVertical: Scaler(24),
  },

  incomeContent: {
    width: '45%',
  },

  incomeRefresh: {
    padding: Scaler(8),
  },

  buttonIconContainer: {
    alignItems: 'center',
    width: '25%',
  },

  menuContainer: {
    flexWrap: 'wrap',
    rowGap: Scaler(32),
    flexDirection: 'row',
    marginVertical: Scaler(14),
  },

  bottomContainer: {
    marginTop: Scaler(24),
  },

  // -- text style
  textName: {
    fontWeight: '800',
  },

  textIncome: {
    fontWeight: '800',
  },

  textMenu: {
    textAlign: 'center',
  },

  textVersion: {
    textAlign: 'center',
  },
});

export default Home;
