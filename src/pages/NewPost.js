import React, { useContext, useState } from 'react';
import { FormGroup, Grid, Row, Col, Button } from '@smooth-ui/core-sc';
import { MarkdownEditorTextarea } from '../components/MarkdownEditor/MarkdownEditor.style';
import Ups from '../components/Ups/Ups';
import { UserContext } from '../userContext';
import PageTitle from '../components/PageTitle/PageTitle';
import { SmallLabel } from '../components/ui/SmallLabel';
import { TextInput } from '../components/ui/TextInput';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { requestDocAddNew } from '../helpers/request';
import { createPostSlug } from '../helpers/slug';

const NewPost = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const userData = useContext(UserContext);

  const { user } = userData;

  const handleSave = values => {
    const {
      title,
      content,
      excerpt,
      coverImageAuthor,
      coverImageAuthorUrl,
      coverImageName,
      coverImageSource,
      coverImageSourceUrl,
      coverImageSquare,
      coverImageUrl,
    } = values;
    const data = {
      title,
      content: window.btoa(unescape(encodeURIComponent(content))),
      excerpt: window.btoa(unescape(encodeURIComponent(excerpt))),
      creationDate: new Date().toISOString(),
      slug: createPostSlug(title),
      coverImage: {
        author: coverImageAuthor,
        authorUrl: coverImageAuthorUrl,
        name: coverImageName,
        source: coverImageSource,
        sourceUrl: coverImageSourceUrl,
        squareUrl: coverImageSquare,
        url: coverImageUrl,
      }
    };

    requestDocAddNew('posts', data)
      .then(res => console.log(res));
  };

  const handleFileChange = e => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
    console.log(file);
    // request()
    //   .post('uploads', e.target.files[0])
    //   .then(() => {
    //     console.log('send');
    //   });
    // this.setState({ file: file });
  };

  return user.name && user.permissions.indexOf('CAN_CREATE_POST') !== -1 ? (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.NEW_POST.TITLE')} />
          <Formik
            initialValues={{
              title: '',
              content: '',
              excerpt: '',
              coverImageUrl: '',
              coverImageSource: 'flickr.com',
              coverImageSourceUrl: '',
              coverImageAuthorUrl: '',
              coverImageName: '',
              coverImageAuthor: '',
              coverImageSquare: '',
            }}
            onSubmit={handleSave}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <TextInput
                    control
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-title">
                    {t('ADMIN.NEW_POST.FORM.ARTICLE_TITLE.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-title"
                    type="text"
                    name="title"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.ARTICLE_TITLE.PLACEHOLDER'
                    )}
                    value={values.title}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="new-post-excerpt">
                    {t('ADMIN.NEW_POST.FORM.EXCERPT.LABEL')}
                  </SmallLabel>
                  <MarkdownEditorTextarea
                    id="new-post-excerpt"
                    height="auto"
                    name="excerpt"
                    value={values.excerpt}
                    onChange={handleChange}
                    placeholder={t('ADMIN.NEW_POST.FORM.EXCERPT.PLACEHOLDER')}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="new-post-content">
                    {t('ADMIN.NEW_POST.FORM.ARTICLE.LABEL')}
                  </SmallLabel>
                  <MarkdownEditorTextarea
                    id="new-post-content"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    placeholder={t('ADMIN.NEW_POST.FORM.ARTICLE.PLACEHOLDER')}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageUrl">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_URL.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageUrl"
                    type="text"
                    name="coverImageUrl"
                    value={values.coverImageUrl}
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_URL.PLACEHOLDER'
                    )}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageSource">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_SOURCE.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageSource"
                    type="text"
                    name="coverImageSource"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_SOURCE.PLACEHOLDER'
                    )}
                    value={values.coverImageSource}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageSourceUrl">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_SOURCE_URL.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageSourceUrl"
                    type="text"
                    name="coverImageSourceUrl"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_SOURCE_URL.PLACEHOLDER'
                    )}
                    value={values.coverImageSourceUrl}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageAuthor">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_AUTHOR.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageAuthor"
                    type="text"
                    name="coverImageAuthor"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_AUTHOR.PLACEHOLDER'
                    )}
                    value={values.coverImageAuthor}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageAuthorUrl">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_AUTHOR_URL.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageAuthorUrl"
                    type="text"
                    name="coverImageAuthorUrl"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_AUTHOR_URL.PLACEHOLDER'
                    )}
                    value={values.coverImageAuthorUrl}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageName">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_TITLE.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageName"
                    type="text"
                    name="coverImageName"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_TITLE.PLACEHOLDER'
                    )}
                    value={values.coverImageName}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-coverImageSquare">
                    {t('ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_SQUARE_URL.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-coverImageSquare"
                    type="text"
                    name="coverImageSquare"
                    placeholder={t(
                      'ADMIN.NEW_POST.FORM.COVER_THUMBNAIL_SQUARE_URL.LABEL'
                    )}
                    value={values.coverImageSquare}
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button type="submit">{t('ADMIN.NEW_POST.FORM.SUBMIT')}</Button>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
    </Grid>
  ) : (
    <Ups text={t('ERRORS.WITHOUT_PERMISSION')} />
  );
};

export default NewPost;
