// styles/itemStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  textTipo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textFecha: {
    fontSize: 14,
    color: '#555',
  },
});

export default styles;
