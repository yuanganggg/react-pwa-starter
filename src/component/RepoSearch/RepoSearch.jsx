/**
 * @description - github repo search
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
// External
import React, { Component } from 'react';
import { Icon, Input, Table } from 'antd';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/share';
// Internal
import requestRepoSearch from './lib/request-repo-search';
// Global stylesheet with .scss extension
import './RepoSearch.scss';

// Component scope
export default class RepoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      repos: [],
      repoSearchRequesting: false
    };
    this.columns = [
      { key: 'full_name', dataIndex: 'full_name', title: 'Name' },
      { key: 'description', dataIndex: 'description', title: 'Description', width: 400 },
      {
        key: 'html_url',
        dataIndex: 'html_url',
        title: 'URL',
        render: (url) => (<a href={url} target="_blank">{url}</a>)
      },
      { key: 'stargazers_count', dataIndex: 'stargazers_count', title: 'Star' },
      { key: 'language', dataIndex: 'language', title: 'Language' }
    ];
    this.suffix = (<Icon type="search" />);
  }

  componentWillMount() {
    this.keyword$ = Reflect.construct(Subject, []);
    this.search$ = this.keyword$.debounceTime(1000)
      .pluck('keyword')
      .distinctUntilChanged()
      .switchMap((keyword) => requestRepoSearch(keyword));
    // Subscribe several times for HOC TimeMachine, decorate share within TimeMachine
    // Entire state object is not necessary, which maybe cause diff performance issue
    // Initial state is also not necessary, which already declare in constructor block
    this.state$ = Observable.merge(this.keyword$, this.search$);
  }

  componentDidMount() {
    this.subscription = this.state$.subscribe((state) => {
      this.setState(state);
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  handleKeywordSearch = (evt) => {
    this.keyword$.next({ keyword: evt.target.value });
  };

  render() {
    return (
      <section className="repo-search__box">
        <header className="repo-search__stdin">
          <Input
            type="text"
            size="large"
            placeholder="repo keyword"
            suffix={this.suffix}
            value={this.state.keyword}
            onInput={this.handleKeywordSearch}
          />
        </header>
        <article className="repo-search__visualize">
          <Table
            rowKey="id"
            pagination={false}
            loading={this.state.repoSearchRequesting}
            columns={this.columns}
            dataSource={this.state.repos}
          />
        </article>
      </section>
    );
  }
}
