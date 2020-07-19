import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },

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

  diceBag: {
    flex: 1,
    flexDirection: 'row',

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

  displayText: {
    fontSize: 18,
  },

  miniDieImage: {
    width: 50,
    height: 55,
  },

  resultContainer: {
    alignItems: 'center',
    height: 50
  },

  userControls: {
    paddingVertical: 30,
  }
})

export { styles }
