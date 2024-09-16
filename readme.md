Uses
1. import Poll from 'poll-widget-24';
2. Use in your app as below
    <Poll
      title="What is your favorite framework"
      options={[{ id: 1, name: 'Vue' }, { id: 1, name: 'React' }, , { id: 1, name: 'Angular' }]}
      onSubmit={() => console.log('submitted')}
      onVote={(vote) => console.log('voted', vote)}
    />