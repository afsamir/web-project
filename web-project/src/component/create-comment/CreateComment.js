import React from "react";
import {Icon, Button, Form} from "semantic-ui-react";
import Axios from "axios";
import BackUrls from "../../utils/BackUrls";
import Auth from "../../utils/Auth";

export default class CreateComment extends React.Component {

    static formToJSON(form) {

        let obj = {};
        let elements = form.querySelectorAll("textarea");
        for (let i = 0; i < elements.length; ++i) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return (obj);
    }


    static reRender() {
        CreateComment.render()
    }

    createComment() {
        const form = document.getElementById('comment-form');

        let formJSON = CreateComment.formToJSON(form);

        formJSON['token'] = Auth.getToken();
        formJSON['slug'] = this;
        formJSON['title'] = 'عنوان';

        if (Auth.getProfile())
            Axios.post(BackUrls.newsComment, formJSON).then(re => alert('نظر شما ثبت شد.')).catch(er =>
                alert('این امکان به دلیل مشکلات فنی در حال حاضر وجود ندارد.')
            );
        else
            alert('ابتدا وارد حساب خود شوید.')

    }

    render() {
        const {slug} = this.props;

        return (

            <div>
                <Form className={'comment-form'} id={'comment-form'}>
                    <Form.TextArea name={'text'} label='نظر' placeholder='نظر خود را اینجا بنویسید ...'
                                   id={'create-comment-text'}/>
                </Form>
                <div className={'create-comment'}>
                    <div>
                        <Button animated='vertical' onClick={this.createComment.bind(slug)}>
                            <Button.Content hidden>ارسال</Button.Content>
                            <Button.Content visible>
                                <Icon name='send'/>
                            </Button.Content>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

}