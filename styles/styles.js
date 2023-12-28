import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#EEF5FF',
  },
  appHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0F2167',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    marginRight: 8,
    padding: 10,
  },
  goalList: {
    flex: 5,
    marginTop: 10,
    borderRadius: 6,
  },
  goal: {
    fontSize: 20,
    backgroundColor: '#176B87',
    padding: 10,
    color: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  goalText: {
    fontSize: 18,
    backgroundColor: '#176B87',
    color: '#fff',
  },
  goalHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: 100,
  },
});
