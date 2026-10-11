(() => {
  const applyFriendView = () => {
    document.querySelectorAll('[data-copy="home"], .ask-friend-head small').forEach((el) => {
      el.textContent = '今天见过';
    });

    const things = document.querySelector('[data-view="things"]');
    if (!things) return;

    things.innerHTML = `
      <div class="view-head"><button data-go="home">‹</button><b>我的朋友</b><span>✦ 1</span></div>
      <div class="section-intro"><strong>我认识的朋友</strong><small>每个朋友都会继续长大</small></div>
      <button class="friend-card mint-bg" data-go="meet">
        <div class="photo-avatar collection-avatar"><img id="collectionAvatar" alt="小甲的照片"><div class="avatar-eyes"><i></i><i></i></div></div>
        <span><b>小甲</b><small>今天见过</small></span><em>›</em><label class="category-tag">自然</label>
      </button>
      <button class="big-cta lemon-bg" data-go="home">回到首页 <span>→</span></button>
    `;

    const source = document.querySelector('#avatarImage');
    const avatar = document.querySelector('#collectionAvatar');
    if (source && avatar && source.getAttribute('src')) avatar.src = source.src;

    things.querySelectorAll('[data-go]').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.view').forEach((view) => {
          view.classList.toggle('active', view.dataset.view === button.dataset.go);
        });
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyFriendView, { once: true });
  } else {
    applyFriendView();
  }
})();
