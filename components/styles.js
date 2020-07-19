import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'ghostwhite',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#444',
    marginVertical: 50,
    padding: 20,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
  },

  dieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },

  dieImage: {
    width: 100,
    height: 110,
  },

  dimensionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  displayText: {
    fontSize: 18,
  },

  input: {
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: 50
  },

  resultContainer: {
    alignItems: 'center',
  }
})

export { styles }
