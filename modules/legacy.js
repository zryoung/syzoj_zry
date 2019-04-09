app.get('/problem', async (req, res) => {
  res.redirect('/problems');
});

app.get('/contest', async (req, res) => {
  res.redirect('/contests');
});

app.get('/judge_state', async (req, res) => {
  res.redirect('/submissions');
});

app.get('/judge_detail/:id', async (req, res) => {
  res.redirect('/submission/' + req.params.id);
});

app.get('/sign_up', async (req, res) => { 
  if (res.locals.user) { 
    res.render('error', { 
      err: new ErrorMessage('您已经登录了，请先注销。', { '注销': syzoj.utils.makeUrl(['logout'], { 'url': req.originalUrl }) })
    }); 
  } else { 
    res.render('error', { 
      err: new ErrorMessage('暂时不开放注册。', { '登录': syzoj.utils.makeUrl(['login'], { 'url': req.originalUrl }) }) 
    }); 
  } 
});
