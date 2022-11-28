import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest'
import BlogAuthor, {GitHubLink, TwitterLink, LinkedinLink} from '../index';

describe('BlogAuthor component', () => {
    it('should render correctly', () => {
        const { container } = render(
            <BlogAuthor
                author='Adoptium PMC'
                date='2021-07-01'
                identifier='pmc'
            />
        );

        expect(container).toMatchSnapshot();
    });

    it('GitHub link - should render correctly', () => {
        const { container } = render(
            <GitHubLink
                name={'sample'}
            />
        );

        expect(container).toMatchSnapshot();
    });

    it('Twitter link - should render correctly', () => {
        const { container } = render(
            <TwitterLink
                name={'sample'}
            />
        );

        expect(container).toMatchSnapshot();
    });

    it('Linkedin link - should render correctly', () => {
        const { container } = render(
            <LinkedinLink
                name={'sample'}
            />
        );

        expect(container).toMatchSnapshot();
    });
});