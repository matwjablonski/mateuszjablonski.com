import React from 'react';
import classnames from 'classnames';
import style from './Loading.module.scss';

const Loading = () => <div className={style.loading}>
  <div className={style['loading-circle']}></div>
  <div className={classnames(style['loading-circle'], style['loading-circle-next'])}></div>
</div>

export default Loading;
