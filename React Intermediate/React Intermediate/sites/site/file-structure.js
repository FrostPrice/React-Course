// DO NOT DO THIS
<CommentItem likeComment={() => this.likeComment(user.id)} />


// THIS IS THE WAY TO BE DONE
<CommentItem likeComment={this.likeComment} userID={user.id} />


class CommentItem extends PureComponent {
    ...
    handleLike() {
      this.props.likeComment(this.props.userID)
    }
    ...
  }


  render() {
    const { posts } = this.props
    const topTen = [...posts].sort((a, b) => 
      b.likes - a.likes).slice(0, 9)
    return //...
  }



  componentWillMount() {
    this.setTopTenPosts(this.props.posts)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.posts !== nextProps.posts) {
      this.setTopTenPosts(nextProps.posts)
    }
  }
  setTopTenPosts(posts) {
    this.setState({
      topTen: [...posts].sort((a, b) => b.likes - a.likes).slice(0, 9)
    })
  }



  