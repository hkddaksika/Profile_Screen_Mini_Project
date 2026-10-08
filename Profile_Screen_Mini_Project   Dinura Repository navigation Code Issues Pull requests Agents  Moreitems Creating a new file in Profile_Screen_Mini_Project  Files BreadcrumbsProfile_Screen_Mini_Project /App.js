import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Top App Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.content}>
        {/* Profile Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Diluka&glasses=round',
            }}
            style={styles.avatar}
          />
          {/* Verified Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeCheck}>✓</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* User Details */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Diluka</Text>

          <Text style={styles.label}>Email</Text>
          <View style={styles.row}>
            <Text style={styles.icon}>✉</Text>
            <Text style={styles.valueWithIcon}>diluka.w@nsbm.ac.lk</Text>
          </View>

          <Text style={styles.label}>Points</Text>
          <View style={styles.row}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.valueWithIcon}>{points}</Text>
          </View>
        </View>

        {/* Floating Action Button (+) */}
        <TouchableOpacity
          style={styles.fab}
          onPress={() => setPoints(points + 1)}
          activeOpacity={0.8}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 56,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    position: 'relative',
  },
  avatarContainer: {
    alignSelf: 'center',
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  badge: {
    position: 'absolute',
    bottom: 2,
    right: 6,
    backgroundColor: '#4caf50',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  badgeCheck: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#9e9e9e',
    marginTop: 24,
    marginBottom: 20,
    width: '100%',
  },
  infoSection: {
    width: '100%',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#333333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 14,
    color: '#333333',
    marginRight: 8,
  },
  starIcon: {
    fontSize: 14,
    color: '#000000',
    marginRight: 8,
  },
  valueWithIcon: {
    fontSize: 14,
    color: '#333333',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    backgroundColor: '#121212',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 26,
    lineHeight: 28,
    textAlign: 'center',
  },
});
