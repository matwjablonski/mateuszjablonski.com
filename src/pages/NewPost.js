import React, { useContext } from 'react';
import MarkdownIt from 'markdown-it';
import Parser from 'html-react-parser';
import { FormGroup } from '@smooth-ui/core-sc';
import { MarkdownEditorTextarea } from '../components/MarkdownEditor/MarkdownEditor.style';
import Ups from '../components/Ups/Ups';
import { UserContext } from '../userContext';
import PageTitle from '../components/PageTitle/PageTitle';
import { SmallLabel } from '../components/ui/SmallLabel';
import { TextInput } from '../components/ui/TextInput';
import { Formik } from 'formik';

const md = new MarkdownIt();

const NewPost = () => {
  const userData = useContext(UserContext);

  const { user } = userData;

  const handleSave = values => {
    console.log(values);
  };

  return user.name ? (
    <>
      <PageTitle text="Dodawanie nowego postu" />
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
              <SmallLabel htmlFor="form-group-email">Tytuł artykułu</SmallLabel>
              <TextInput
                control
                id="form-group-email"
                type="text"
                name="email"
                placeholder="Podaj tytuł artykułu"
                value={values.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="new-post-excerpt">Treść wypisu</SmallLabel>
              <MarkdownEditorTextarea
                id="new-post-excerpt"
                height="auto"
                name="excerpt"
                value={values.excerpt}
                onChange={handleChange}
                placeholder="Wprowadź treść wypisu..."
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="new-post-content">Treść artykułu</SmallLabel>
              <MarkdownEditorTextarea
                id="new-post-content"
                name="content"
                value={values.content}
                onChange={handleChange}
                placeholder="Wprowadź treść artykułu w Markdown..."
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageUrl">
                URL zdjęcia przewodniego
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageUrl"
                type="text"
                name="coverImageUrl"
                value={values.coverImageUrl}
                placeholder="Podaj URL zdjęcia przewodniego"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageSource">
                Źródło zdjęcia przewodniego
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageSource"
                type="text"
                name="coverImageSource"
                placeholder="Podaj źródło zdjęcia przewodniego"
                value={values.coverImageSource}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageSourceUrl">
                URL źródła zdjęcia przewodniego
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageSourceUrl"
                type="text"
                name="coverImageSourceUrl"
                placeholder="Podaj URL źródła zdjęcia przewodniego"
                value={values.coverImageSourceUrl}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageAuthor">
                Autor zdjęcia przewodniego (imię, nazwisko, pseudonim)
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageAuthor"
                type="text"
                name="coverImageAuthor"
                placeholder="Podaj autora zdjęcia przewodniego (imię, nazwisko, pseudonim)"
                value={values.coverImageAuthor}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageAuthorUrl">
                URL strony autora zdjęcia przewodniego
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageAuthorUrl"
                type="text"
                name="coverImageAuthorUrl"
                placeholder="Podaj URL strony autora zdjęcia przewodniego"
                value={values.coverImageAuthorUrl}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageName">
                Tytuł zdjęcia przewodniego
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageName"
                type="text"
                name="coverImageName"
                placeholder="Podaj tytuł zdjęcia przewodniego"
                value={values.coverImageName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <SmallLabel htmlFor="form-group-coverImageSquare">
                URL miniaturki postu
              </SmallLabel>
              <TextInput
                control
                id="form-group-coverImageSquare"
                type="text"
                name="coverImageSquare"
                placeholder="Podaj URL miniaturki postu"
                value={values.coverImageSquare}
                onChange={handleChange}
              />
            </FormGroup>
          </form>
        )}
      </Formik>

      {Parser(md.render('# Dashboard \n## test'))}
    </>
  ) : (
    <Ups text="Nie masz uprawnień, aby przeglądać tę stronę." />
  );
};

export default NewPost;
