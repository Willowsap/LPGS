'use strict';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header : {
    flex : 0.2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle : {
    fontFamily: 'Europa-Bold',
    fontSize: 18,
    alignContent: 'center',
  },
  headerAuthor : {
    fontFamily: 'Europa-Bold',
    fontSize: 12,
    alignContent: 'center',
  },
  inputSection : {
    flex : 0.5
  },
  resultSection : {
    flex : 0.5
  },
  resultList: {
    flex: 1
  },
  text : {
    color: '#FFFFFF',
    flex : 1,
    fontSize: 20,
    fontFamily: 'Europa-Light',
    textDecorationLine : 'none',
  },
});
